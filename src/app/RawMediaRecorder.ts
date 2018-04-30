/**
 * Record audio from MediaStream into raw AudioBuffer
 */
class RawMediaRecorder {
  readonly ctx: AudioContext;
  readonly bufferSize: number;
  private stream: MediaStream;
  private source: MediaStreamAudioSourceNode;
  private buffers: Float32Array[];
  private script?: ScriptProcessorNode;
  public analyser?: AnalyserNode;
  public voice: any;
  public  songBuffer: any;
  /** Funciton to call when recording started */
  onStart: () => void;
  /** Funciton to call when recording stoped */
  onStop: () => void;
  /** Called when data recorded and available */
  onData: (AudioBuffer) => void;

  constructor(audioContext: AudioContext, bufferSize = 4096) {
    // this.loadSound();
    this.ctx = audioContext;
    this.bufferSize = bufferSize;

    this.onStart = () => console.log('recording started');
    this.onStop = () => console.log('recording stopped');
    this.onData = data => console.log('data available');

    this.buffers = [];
  }

   loadSound(url) {
     const context = new AudioContext();
    const  request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.responseType = 'arraybuffer';

    // Decode asynchronously
    request.onload = function() {
      context.decodeAudioData(request.response, function(buffer) {
        this.songBuffer = buffer;
      });
    }
    request.send();
  }
   playSound(songBuffer) {
    const source = this.ctx.createBufferSource();
    // creates a sound source
    source.buffer = this.songBuffer;
    // tell the source which sound to play
    source.connect(this.ctx.destination);
    // connect the source to the context's destination (the speakers)
    source.start(0);
    // play the source now
  }
  /** Start recording */
  start() {
    this.ctx
      .resume()
      .then(() =>
        navigator.mediaDevices.getUserMedia({ audio: true, video: false })
      )
      .then(stream => this.startStream(stream))
      .catch(err => console.error(err));
  }

  private startStream(stream: MediaStream) {
    const source = this.ctx.createMediaStreamSource(stream);
    const analyser = this.ctx.createAnalyser();
    const script = this.ctx.createScriptProcessor(this.bufferSize, 1, 1)

    script.onaudioprocess = ev => {
      this.buffers.push(ev.inputBuffer.getChannelData(0).slice());
    };

    source.connect(analyser);
    analyser.connect(script);
    script.connect(this.ctx.destination);
    this.voice = this.ctx.createBufferSource();
    // this.voice.buffer = this.buffers;
    this.voice.connect(this.ctx.destination);
    this.stream = stream;
    this.source = source;
    this.analyser = analyser;
    this.script = script;
    this.onStart();
  }

  /** Stop recording */
  stop(dataCallback) {
    this.stream.getTracks().forEach(track => track.stop());
    this.source.disconnect();
    this.analyser.disconnect();
    this.script.disconnect();

    const buffers = this.buffers;
    this.buffers = [];
    this.stream = null;
    this.source = null;
    this.analyser = null;
    this.script = null;
    this.onStop();

    setTimeout(() => this.exportData(buffers, dataCallback || this.onData), 100);
  }

  /** Cancel recording, onstop will be called but not ondata */
  cancel() {
    this.stop(() => {
      /* noop */
    });
  }

  private exportData(buffers, callback) {
    const totalLength = buffers.reduce((acc, buffer) => acc + buffer.length, 0);
    const audioBuffer = this.ctx.createBuffer(1, totalLength, this.ctx.sampleRate);
    const outChannel = audioBuffer.getChannelData(0);

    let offset = 0;
    for (const buffer of buffers) {
      outChannel.set(buffer, offset)
      offset += buffer.length;
    }

    callback(audioBuffer);
  }
}

export default RawMediaRecorder;
