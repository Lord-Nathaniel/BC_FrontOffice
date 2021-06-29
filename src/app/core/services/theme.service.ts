import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private renderer: Renderer2;
  private colorTheme: string|null=null;
  private sizeTheme: string|null=null;

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  private setColorTheme(theme:string) {
    this.colorTheme = theme;
    localStorage.setItem('user-color-theme', theme);
  }

  private setSizeTheme(theme:string) {
    this.sizeTheme = theme;
    localStorage.setItem('user-size-theme', theme)
  }

  updateColor(theme: 'dark-mode' | 'light-mode') {
    this.setColorTheme(theme);
    const previousColorTheme = (theme === 'dark-mode' ? 'light-mode' : 'dark-mode');
    this.renderer.removeClass(document.body, previousColorTheme);
    this.renderer.addClass(document.body, theme);
  }

  updateSize(theme: 'small-size' | 'large-size'){
    this.setSizeTheme(theme);
    const previousSizeTheme = (theme === 'large-size' ? 'small-size' : 'large-size')
    this.renderer.removeClass(document.body, previousSizeTheme);
    this.renderer.addClass(document.body, theme);
  }

  initColorTheme() {
    this.getColorTheme();
    if (this.colorTheme !== null)
    this.renderer.addClass(document.body, this.colorTheme);
  }

  initSizeTheme() {
    this.getSizeTheme();
    if (this.sizeTheme !== null)
    this.renderer.addClass(document.body, this.sizeTheme);
  }

  isDarkMode() {
    return this.colorTheme === 'dark-mode';
  }

  isFontSize() {
    return this.sizeTheme === 'large-size';
  }

  private getColorTheme() {
    if (localStorage.getItem('user-color-theme')) {
      this.colorTheme = localStorage.getItem('user-color-theme');
    } else {
      this.colorTheme = 'light-mode';
    }
  }

  private getSizeTheme() {
    if (localStorage.getItem('user-size-theme')) {
      this.sizeTheme = localStorage.getItem('user-size-theme');
    } else {
      this.sizeTheme = 'small-size';
    }
  }
}
