import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {
  GridLayout,
  Image,
  ModalGalleryRef,
  ModalGalleryService,
  PlainGalleryConfig,
  PlainGalleryStrategy
} from '@ks89/angular-modal-gallery';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'fd-programs-preview',
  templateUrl: './programs-preview.component.html',
  styleUrls: ['./programs-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProgramsPreviewComponent implements OnInit {

  images: Image[] = [
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

  constructor(private modalGalleryService: ModalGalleryService, public translate: TranslateService) {
  }

  ngOnInit(): void {
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
