import { Component, define } from "@kickstartds/core/lib/component";

export default class Signpost extends Component {
  static identifier = "swo.signpost";

  constructor(element) {
    super(element);

    this.panels = Array.from(element.querySelectorAll(".signpost__panel"));
    this.tabsMobile = Array.from(
      element.querySelectorAll(".signpost__tab--mobile")
    );
    this.tabsDesktop = Array.from(
      element.querySelectorAll(".signpost__tab--desktop")
    );

    this.activeIndex = this.panels.findIndex(
      (panel) => !panel.hasAttribute("hidden")
    );

    element.addEventListener("click", this);
  }

  toggle(index) {
    if (index === this.activeIndex) {
      this.close(index);
      this.activeIndex = -1;
    } else {
      if (this.activeIndex > -1) {
        this.close(this.activeIndex);
      }
      this.open(index);
      this.activeIndex = index;
    }
  }

  open(index) {
    this.panels[index].removeAttribute("hidden");
    this.tabsMobile[index].setAttribute("aria-selected", "true");
    this.tabsDesktop[index].setAttribute("aria-selected", "true");
  }

  close(index) {
    this.panels[index].setAttribute("hidden", "");
    this.tabsMobile[index].setAttribute("aria-selected", "false");
    this.tabsDesktop[index].setAttribute("aria-selected", "false");
  }

  onclick(event) {
    const tab = event.target.closest('[aria-controls^="signpost__panel--"]');
    if (tab) {
      const [, index] = tab.getAttribute("aria-controls").split("--");
      this.toggle(parseInt(index, 10));
    }
  }
}

define(Signpost.identifier, Signpost);
