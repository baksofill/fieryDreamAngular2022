import { Component, OnInit, ChangeDetectionStrategy, Input, OnChanges, SimpleChanges } from '@angular/core';
import {
  GridLayout,
  Image,
  ModalGalleryRef,
  ModalGalleryService,
  PlainGalleryConfig,
  PlainGalleryStrategy
} from '@ks89/angular-modal-gallery';
import { TranslateService } from '@ngx-translate/core';
import { CommonConstants } from '../../../core/common-constants';

@Component({
  selector: 'fd-programs-preview',
  templateUrl: './programs-preview.component.html',
  styleUrls: ['./programs-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProgramsPreviewComponent implements  OnChanges {

  @Input()  galaryType: string = "";

  images: any;
  imagesOM: Image[] = [
    new Image(0, {
      img: '../../../../assets/gallery/14.jpg',
      description: this.translate.instant('fd.prices.programs.bris')
    }),
    new Image(1, {
      img: '../../../../assets/gallery/15.jpg',
      description: this.translate.instant('fd.prices.programs.cube')
    }),
    new Image(2, {
      img: '../../../../assets/gallery/17.jpg',
      description: this.translate.instant('fd.prices.programs.pyro')
      }),
    new Image(3, {
      img: '../../../../assets/gallery/18.jpg',
      description: this.translate.instant('fd.prices.programs.fireshow')
    }),
    new Image(4, {
      img: '../../../../assets/gallery/16.jpg',
      description: this.translate.instant('fd.prices.programs.symbols')
    }),
    new Image(5, {
      img: '../../../../assets/gallery/13.jpg',
      description: this.translate.instant('fd.prices.programs.show')
    }),
    new Image(6, {
      img: '../../../../assets/gallery/11.jpg',
      description: this.translate.instant('fd.prices.programs.theatre')
    }),
  ];
  imagesUkr: Image[] = [
    new Image(0, {
      img: '../../../../assets/gallery/28.jpg',
      description: this.translate.instant('fd.prices.programs.bris')
    }),
    new Image(1, {
      img: '../../../../assets/gallery/22.jpg',
      description: this.translate.instant('fd.prices.programs.tris')
    }),
    new Image(2, {
      img: '../../../../assets/gallery/23.jpg',
      description: this.translate.instant('fd.prices.programs.acro')
    }),
    new Image(3, {
      img: '../../../../assets/gallery/24.jpg',
      description: this.translate.instant('fd.prices.programs.fans')
    }),
    new Image(4, {
      img: '../../../../assets/gallery/25.jpg',
      description: this.translate.instant('fd.prices.programs.flip')
    }),
    new Image(5, {
      img: '../../../../assets/gallery/26.jpg',
      description: this.translate.instant('fd.prices.programs.sword')
    }),
    new Image(6, {
      img: '../../../../assets/gallery/27.jpg',
      description: this.translate.instant('fd.prices.programs.final')
    }),
  ];
  imagesHawaii: Image[] = [
    new Image(0, {
      img: '../../../../assets/gallery/31.jpg',
      description: this.translate.instant('fd.prices.programs.hawaii')
    }),
    new Image(1, {
      img: '../../../../assets/gallery/32.jpg',
      description: this.translate.instant('fd.prices.programs.juggling')
    }),
    new Image(2, {
      img: '../../../../assets/gallery/33.jpg',
      description: this.translate.instant('fd.prices.programs.interactive')
    }),
    new Image(3, {
      img: '../../../../assets/gallery/35.jpg',
      description: this.translate.instant('fd.prices.programs.sphere')
    }),
    new Image(4, {
      img: '../../../../assets/gallery/36.jpg',
      description: this.translate.instant('fd.prices.programs.exlusive')
    }),
    new Image(5, {
      img: '../../../../assets/gallery/34.jpg',
      description: this.translate.instant('fd.prices.programs.rope')
    }),
    new Image(6, {
      img: '../../../../assets/gallery/38.jpg',
      description: this.translate.instant('fd.prices.programs.duet')
    }),
  ];
  imagesStyle: Image[] = [
    new Image(0, {
      img: '../../../../assets/gallery/51.jpg',
      description: this.translate.instant('fd.prices.programs.drive')
    }),
    new Image(1, {
      img: '../../../../assets/gallery/53.jpg',
      description: this.translate.instant('fd.prices.programs.choreo')
    }),
    new Image(2, {
      img: '../../../../assets/gallery/55.jpg',
      description: this.translate.instant('fd.prices.programs.wow')
    }),
    new Image(3, {
      img: '../../../../assets/gallery/56.jpg',
      description: this.translate.instant('fd.prices.programs.wedding')
    }),
    new Image(4, {
      img: '../../../../assets/gallery/57.jpg',
      description: this.translate.instant('fd.prices.programs.order')
    }),
    new Image(5, {
      img: '../../../../assets/gallery/58.jpg',
      description: this.translate.instant('fd.prices.programs.fireExtinguisher')
    }),
    new Image(6, {
      img: '../../../../assets/gallery/54.jpg',
      description: this.translate.instant('fd.prices.programs.support')
    }),
  ];
  imagesNY: Image[] = [
    new Image(0, {
      img: '../../../../assets/gallery/41.jpg',
      description: this.translate.instant('fd.prices.programs.ny')
    }),
    new Image(1, {
      img: '../../../../assets/gallery/43.jpg',
      description: this.translate.instant('fd.prices.programs.new')
    }),
    new Image(2, {
      img: '../../../../assets/gallery/47.jpg',
      description: this.translate.instant('fd.prices.programs.sparkling')
    }),
    new Image(3, {
      img: '../../../../assets/gallery/46.jpg',
      description: this.translate.instant('fd.prices.programs.tale')
    }),
    new Image(4, {
      img: '../../../../assets/gallery/48.jpg',
      description: this.translate.instant('fd.prices.programs.numbs')
    }),
    new Image(5, {
      img: '../../../../assets/gallery/44.jpg',
      description: this.translate.instant('fd.prices.programs.costs')
    }),
    new Image(6, {
      img: '../../../../assets/gallery/45.jpg',
      description: this.translate.instant('fd.prices.programs.best')
    }),
  ];

  constructor(private modalGalleryService: ModalGalleryService, public translate: TranslateService) {
  }


  ngOnChanges(changes: SimpleChanges): void {
    this.images = this.imagesOM;
    switch (this.galaryType) {
      case CommonConstants.OM:
        this.images = this.imagesOM;
        break;
      case CommonConstants.UKR:
        this.images = this.imagesUkr;
        break;
      case CommonConstants.HAWAII:
        this.images = this.imagesHawaii;
        break;
      case CommonConstants.STYLE:
        this.images = this.imagesStyle;
        break;
      case CommonConstants.NY:
        this.images = this.imagesNY;
        break;
      default:
        this.images = this.imagesOM;
    }
  }

  openImageModalRow(id: number, image: Image): void {
    const index: number = this.getCurrentIndexCustomLayout(image, this.images);
    const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
      id,
      images: this.images,
      currentImage: this.images[index]
    }) as ModalGalleryRef;
  }

  private getCurrentIndexCustomLayout(image: Image, images: Image[]): number {
    return image ? images.indexOf(image) : -1;
  }
}
