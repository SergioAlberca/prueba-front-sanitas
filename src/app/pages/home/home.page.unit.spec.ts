import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
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

  it('data should be array of 4000 elements', () => {
    expect(component.data).toHaveSize(4000);
  });

  it('should return 10 elements of data if elementSearched is empty', () => {
    expect(component.getData()).toHaveSize(10);
  });

  it('should return 1 element of data when filtering', () => {
    component.filterSearch('3000');
    expect(component.getData()).toHaveSize(1);
  });

  it('limit should increase its value by 10', () => {
    component.loadMoreData();
    expect(component.limit).toBe(20);
  });

  it('infinite scrolling should be only if the datashow size is less than 4000', () => {
    component.loadMoreData();
    expect(component.infiniteScroll.disabled).toBe(false);
  });

  it('should be disable scrolling if limit equals 4000', () => {
    component.limit = 4000;
    component.loadMoreData();
    expect(component.infiniteScroll.disabled).toBe(true);
  });

  it('ElementSearched should be equal to Random Text 1', () => {
    component.filterSearch('1');
    expect(component.elementSearched).toBe('1');
  });

  it('should call getDataFiltered method', () => {
    const spy = spyOn(component, 'getDataFiltered').and.callFake((res) => {
      return null;
    });
    component.filterSearch('1');
    expect(spy).toHaveBeenCalled();
  });

  it('It should return a filtered array of 1 element', () => {
    component.getDataFiltered('3000');
    expect(component.dataFiltered).toHaveSize(1);
  });

  it('should return true if data has data', () => {
    component.data = [{ id: '1', text: 'vnfnvfn', url: 'url fake' }];
    expect(component.isAvailableData()).toBe(true);
  });

  it('should return false if data not has data', () => {
    component.data = [];
    expect(component.isAvailableData()).toBe(false);
  });
});
