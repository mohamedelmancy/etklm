import { Component, OnInit, OnDestroy } from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {Validation} from '../shared/validation';
import {FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import RawMediaRecorder from '../RawMediaRecorder';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent extends Validation implements OnDestroy, OnInit {
  busy: Subscription;
  recrived = true;
  favorite = false;
  sent = false;
  replay = false;
  isVoice = true;
  isText = true;
  isText1 = false;
  isAudio = true;
  recorder: any;
  recording = false;
  source: any;
  doneRecording = false;
  laddaLoader = false;
  laddaLoader2 = false;
  modalRef3: BsModalRef;
  avatarFileLink = '';
  uploadAvatarSuccess = '';
  avatarFile;
  acceptedAvatarFileTypes = [
    'image/jpeg',
    'image/png',
    'image/jpg',
    'image/gif',
    'image/svg'
  ];
  avatarRequirementsError: string;
  defaultImage = '../../assets/avatar/avatar.png';
  avatarSrc = this.defaultImage;

  constructor(private iformBuilder: FormBuilder, private irouter: Router, private profileImage: BsModalService) {
    super(iformBuilder, irouter);
    this.recorder = new RawMediaRecorder(new AudioContext());
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      replay: ['', []]
    });
    console.log('Hellooooo');
  }
  openModal3(template) {
    this.modalRef3 = this.profileImage.show(template, {class: 'modal-fix'});
  }

  ngOnDestroy() {
  }
  onSubmit() {
    this.laddaLoader = true;
    // this.replay = false;
    console.log('submiteed');
  }
  receivedClicked() {
    this.recrived = true;
    this.sent = false;
    this.favorite = false;
  }
  sentClicked() {
    this.sent = true;
    this.recrived = false;
    this.favorite = false;
  }
  favoriteClicked() {
    this.favorite = true;
    this.recrived = false;
    this.sent = false;
  }
  startRecorder() {
    this.recorder.start();
      this.recorder.onStart = () => {
        this.recording = true;
      };
      this.recorder.onData = data => {
      const channels  = data.getChannelData(0);
      this.source = this.recorder.source;
         console.log('data', data);
          console.log('channels', channels);
      };
  }
  startToListen() {
    // this.recorder.voice.start();
    // this.recorder.source.start();
  }
  stopRecorder() {
    this.recording = false;
    this.doneRecording = true;
    this.recorder.stop();
    this.recorder.onStop = () => {
    };
  }
  uploadPhoto() {
    this.laddaLoader2 = true;
    this.laddaLoader = true;
    this.uploadAvatarSuccess = 'success';
  }

  uploadNewAvatar(event) {
    console.log('test');
    if (event.target.files[0]) {
      for (let type of this.acceptedAvatarFileTypes) {
        if (event.target.files[0].type === type) {
          if (event.target.files[0].size <= 2097152) {
            event.preventDefault();
            this.avatarFile = event.target.files[0];
            this.uploadImage();
            this.avatarSrc = this.defaultImage;
            const reader = new FileReader();
            const addHubComponent = this;
            reader.addEventListener('load', function () {
              addHubComponent.avatarSrc = reader.result;
            }, false);
            reader.readAsDataURL(this.avatarFile);
            this.avatarRequirementsError = void 0;
            return;
          } else {
            this.avatarRequirementsError = 'Image max size must not exceed 2MB';
          }
        }
      }
    }
  }

  uploadImage() {
    this.laddaLoader2 = true;
    // this.busy2 = this.editOrganizationService.uploadOrgLogo(this.avatarFile, this.organization.id).subscribe(
    //   res => {
    //     this.avatarFileLink = res.data;
    //     console.log(this.avatarFileLink, 'link');
    //   },
    //   err => {
    //     this.laddaLoader2 = false;
    //     this.uploadAvatarSuccess = 'failed';
    //     this.removeAvatar();
    //   },
    //   () => {
    //     this.uploadAvatarSuccess = 'success';
    //     this.laddaLoader2 = false;
    //   }
    // );
  }

  removePhoto() {
    this.avatarFile = void 0;                                   // clear locally uploaded file
    this.avatarSrc = this.defaultImage;   // clear previewed image source
  }

}
