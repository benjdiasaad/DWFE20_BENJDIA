import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProfilComponent } from './update-profil.component';

describe('UpdateProfilComponent', () => {
  let component: UpdateProfilComponent;
  let fixture: ComponentFixture<UpdateProfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateProfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
