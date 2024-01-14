import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AccessibilityConfig, CarouselLibConfig, Image, ImageEvent, ModalGalleryConfig, ModalGalleryRef, ModalGalleryService, ModalLibConfig } from '@ks89/angular-modal-gallery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, AfterViewInit {
  daysDisplay: any;
  date: any;
  now: any;
  targetDate: any = new Date(2024, 10, 23);
  targetTime: any = this.targetDate.getTime();
  difference: any;
  months: Array<string> = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  currentTime: any = `${
    this.months[this.targetDate.getMonth()]
  } ${this.targetDate.getDate()}, ${this.targetDate.getFullYear()}`;

  @ViewChild('days', { static: true })
  days!: ElementRef;
  @ViewChild('hours', { static: true })
  hours!: ElementRef;
  @ViewChild('minutes', { static: true })
  minutes!: ElementRef;
  @ViewChild('seconds', { static: true })
  seconds!: ElementRef;

  LIBCONFIG102: CarouselLibConfig = {
    carouselPreviewsConfig: {
      visible: false,
    },
    carouselImageConfig: {
      invertSwipe: true
    },
    carouselConfig: {
      maxWidth: '100%',
      maxHeight: '25rem',
      showArrows: false,
      objectFit: 'contain', //cover
      keyboardEnable: false,
      modalGalleryEnable: false
    }
  };
  imagesRect: Image[] = [
    new Image(0, { img: '/assets/images/ked1.JPG' }, { img: '/assets/images/ked1.JPG' }),
    new Image(1, { img: '/assets/images/ked2.JPG' }, { img: '/assets/images/ked2.JPG' }),
    new Image(2, { img: '/assets/images/view2.jpeg' }, { img: '/assets/images/view2.jpeg' }),
    new Image(3, { img: '/assets/images/view1.jpeg' }, { img: '/assets/images/view1.jpeg' })

  ]


constructor(private modalGalleryService: ModalGalleryService){}
  
ngOnInit(): void {
  setInterval(() => {
    this.tickTock();
    this.difference = this.targetTime - this.now;
    this.difference = this.difference / (1000 * 60 * 60 * 24);
}, 1000);
}

ngAfterViewInit() {

}

tickTock() {
  this.date = new Date();
  this.now = this.date.getTime();
  // this.days.nativeElement.innerText = Math.floor(this.difference);
  this.daysDisplay = Math.floor(this.difference);
  // this.hours.nativeElement.innerText = 23 - this.date.getHours();
  // this.minutes.nativeElement.innerText = 60 - this.date.getMinutes();
  // this.seconds.nativeElement.innerText = 60 - this.date.getSeconds();
}
}
