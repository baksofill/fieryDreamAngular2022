import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '../../../shared/shared.module';

import { PricesListComponent} from './prices-list.component';

describe('PricesListComponent', () => {
  let component: PricesListComponent;
  let fixture: ComponentFixture<PricesListComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          SharedModule,
          NoopAnimationsModule,
          TranslateModule.forRoot()
        ],
        declarations: [PricesListComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(PricesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
