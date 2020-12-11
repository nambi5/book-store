import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Book } from '../models/book-search.model';

import { ItemCardComponent } from './item-card.component';

describe('ItemCardComponent', () => {
  let component: ItemCardComponent;
  let fixture: ComponentFixture<ItemCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should return same description if character length is smaller than 120', () => {
    component.cardDetails = {
      description:
        'qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq',
    } as Book;
    const funcCall = component.getDescription();
    expect(funcCall).toBe(component.cardDetails.description);
  });
  it('should return same description if character length is larger than 120', () => {
    component.cardDetails = {
      description:
        'qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq',
    } as Book;
    const funcCall = component.getDescription();
    expect(funcCall).toBe(
      component.cardDetails.description.slice(0, 120) + '...'
    );
  });

  it('should emit id to parent on emitClickedCard click', () => {
    spyOn(component.clickedCard, 'emit');
    component.emitClickedCard('123');
    expect(component.clickedCard.emit).toBeCalledWith('123');
  });

  it('should get title when called getTitle', () => {
    const title = 'hello';
    component.cardDetails = {
      title,
    } as Book;
    const funCall = component.getTitle();
    expect(funCall).toBe(title);
  });
  it('should get image url when called getImage', () => {
    const image = 'url';
    component.cardDetails = {
      imageLinks: {
        thumbnail: image,
      },
    } as Book;
    const funCall = component.getImage();
    expect(funCall).toBe(image);
  });
  it('should get  and stringify author name when called getStringifiedAuthorsName', () => {
    const authorname = 'uzumaki,naruto';
    component.cardDetails = {
      authors: ['uzumaki', 'naruto'],
    } as Book;
    const funCall = component.getStringifiedAuthorsName();
    expect(funCall).toBe(authorname);
  });
});
