import { ComponentFixture, fakeAsync, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [HomePage],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        imports: [IonicModule.forRoot()],
      }).compileComponents();

      fixture = TestBed.createComponent(HomePage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be generate an array of 4000 elements', () => {
    expect(component.generatedData).toHaveSize(4000);
  });

  it('DataShow should be 10 long when generating the data', () => {
    expect(component.dataShow).toHaveSize(10);
  });

  it('limit should increase its value by 10', () => {
    component.loadMoreData();
    expect(component.limit).toBe(20);
  });

  it('Should be increase the value of dataShow by 10', () => {
    component.loadMoreData();
    expect(component.dataShow).toHaveSize(20);
  });

  it('infinite scrolling should be only if the datashow size is less than 4000', () => {
    component.loadMoreData();
    expect(component.infiniteScroll.disabled).toBe(false);
  });

  it('ElementSearched should be equal to Random Text 1', () => {
    component.filterSearch('1');
    expect(component.elementSearched).toBe('1');
  });
});
