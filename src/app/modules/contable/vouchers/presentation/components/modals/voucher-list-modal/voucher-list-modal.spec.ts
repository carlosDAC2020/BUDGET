import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoucherListModal } from './voucher-list-modal';

describe('VoucherListModal', () => {
  let component: VoucherListModal;
  let fixture: ComponentFixture<VoucherListModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoucherListModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoucherListModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
