import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDaLinhaComponent } from './post-da-linha.component';

describe('PostDaLinhaComponent', () => {
  let component: PostDaLinhaComponent;
  let fixture: ComponentFixture<PostDaLinhaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostDaLinhaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostDaLinhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
