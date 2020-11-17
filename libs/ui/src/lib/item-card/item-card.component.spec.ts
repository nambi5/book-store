import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCardComponent } from './item-card.component';

describe('ItemCardComponent', () => {
  let component: ItemCardComponent;
  let fixture: ComponentFixture<ItemCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemCardComponent ]
    })
    .compileComponents();
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
    const book = {
      volumeInfo: {
        description:
          'qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq',
      },
    };
    const funcCall = component.getDescription(book);
    expect(funcCall).toBe(book.volumeInfo.description);
  });
  it('should return same description if character length is larger than 120', () => {
    const book = {
      volumeInfo: {
        description:
          'qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq',
      },
    };
    const funcCall = component.getDescription(book);
    expect(funcCall).toBe(book.volumeInfo.description.slice(0,120)+"...");
  });

  it('should emit id to parent on emitClickedCard click', ()=>{
    spyOn(component.clickedCard, 'emit');
    component.emitClickedCard('123');
    expect(component.clickedCard.emit).toBeCalledWith('123');
  })
});
