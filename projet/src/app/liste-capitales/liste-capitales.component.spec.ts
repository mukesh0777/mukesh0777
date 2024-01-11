import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeCapitalesComponent } from './liste-capitales.component';

describe('ListeCapitalesComponent', () => {
  let component: ListeCapitalesComponent;
  let fixture: ComponentFixture<ListeCapitalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeCapitalesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListeCapitalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
