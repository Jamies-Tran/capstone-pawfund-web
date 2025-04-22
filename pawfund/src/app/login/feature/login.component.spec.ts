import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { RouterLink } from '@angular/router';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { FacebookFill, UserOutline, InstagramOutline, DiscordFill, LockOutline, TwitterOutline } from '@ant-design/icons-angular/icons';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NzLayoutModule,
        NzMenuModule,
        NzImageModule,
        NzGridModule,
        NzButtonModule,
        NzIconModule.forRoot([FacebookFill, UserOutline, InstagramOutline, DiscordFill, LockOutline, TwitterOutline]), // Đăng ký các icon cần thiết
        RouterLink,
        NzFormModule,
        NzInputModule,
        ReactiveFormsModule,
        LoginComponent // Đưa LoginComponent vào imports vì nó là standalone
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('test_layout_rendering', () => {
    const layoutElement = fixture.debugElement.query(By.css('nz-layout'));
    expect(layoutElement).toBeTruthy();
    expect(layoutElement.nativeElement.classList).toContain('tw-bg-cover');
  });

  it('test_form_validation', () => {
    const usernameInput = fixture.debugElement.query(By.css('input[formControlName="username"]'));
    const passwordInput = fixture.debugElement.query(By.css('input[formControlName="password"]'));

    usernameInput.nativeElement.value = '';
    passwordInput.nativeElement.value = '';
    usernameInput.nativeElement.dispatchEvent(new Event('input'));
    passwordInput.nativeElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    const usernameError = fixture.debugElement.query(By.css('nz-form-control[nzErrorTip="Please input your username!"]'));
    const passwordError = fixture.debugElement.query(By.css('nz-form-control[nzErrorTip="Please input your Password!"]'));

    expect(usernameError).toBeTruthy();
    expect(passwordError).toBeTruthy();
  });

  it('test_icon_rendering', async () => {
    await fixture.whenStable();
    fixture.detectChanges();

    const icons = fixture.debugElement.queryAll(By.css('nz-icon'));
    console.log('Số lượng icon tìm thấy:', icons.length); // 🛠 Debug số lượng icon

    expect(icons.length).toBeGreaterThan(0);
    if (icons.length === 0) {
      fail('Không tìm thấy icon nào trong LoginComponent');
    }

    icons.forEach(icon => {
      const nzType = icon.nativeElement.getAttribute('nzType');
      const nzTheme = icon.nativeElement.getAttribute('nzTheme');

      console.log('Icon found:', nzType, nzTheme); // 🛠 Debug giá trị icon
      expect(nzType).toBeDefined();
      expect(nzTheme).toBeDefined();
    });
  });


});
