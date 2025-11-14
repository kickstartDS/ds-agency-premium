import {
  createContext,
  forwardRef,
  ImgHTMLAttributes,
  useContext,
} from "react";
import { EnergyCalculator } from "./energy-calculator/EnergyCalculatorComponent";
import { TripPlanner } from "./trip-planner/TripPlannerComponent";
import "./page-teaser.scss";
import { Headline } from "../headline/HeadlineComponent";
import { Button } from "../button/ButtonComponent";
import { PageTeaserProps } from "./PageTeaserProps";

export type { PageTeaserProps };

export const PageTeaserContextDefault = forwardRef<
  HTMLImageElement,
  PageTeaserProps & ImgHTMLAttributes<HTMLImageElement>
>(({ image, widget, links }) => {
  return (
    <div className="page-teaser">
      {widget === "image" && (
        <div className="page-teaser__widget">
          <div className="page-teaser__content">
            <img
              className="page-teaser__image"
              src={image?.src}
              alt="Alle vrijetijdsactiviteiten in het Nettebad"
            />
          </div>
        </div>
      )}
      {widget === "energyCalculator" && <EnergyCalculator />}
      {widget === "timetable" && <TripPlanner />}

      <div className="page-teaser__info">
        <div className="page-teaser__content">
          <Headline text="Weitere Top-Themen" level="h3" style="h3" />
          <ul className="page-teaser__link-list">
            {links?.map((link, index) => (
              <li key={index} className="page-teaser__link-item">
                <Button label={link.label} url={link.target} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
});

export const PageTeaserContext = createContext(PageTeaserContextDefault);
export const PageTeaser = forwardRef<
  HTMLImageElement,
  ImgHTMLAttributes<HTMLImageElement>
>((props, ref) => {
  const Component = useContext(PageTeaserContext);
  return <Component {...props} ref={ref} />;
});
PageTeaser.displayName = "PageTeaser";
