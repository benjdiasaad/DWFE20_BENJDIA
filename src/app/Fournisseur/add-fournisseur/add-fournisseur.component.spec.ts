import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFournisseurComponent } from './add-fournisseur.component';

describe('AddFournisseurComponent', () => {
  let component: AddFournisseurComponent;
  let fixture: ComponentFixture<AddFournisseurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFournisseurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
