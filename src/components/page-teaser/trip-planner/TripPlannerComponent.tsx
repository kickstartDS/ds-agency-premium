import {
  createContext,
  forwardRef,
  ImgHTMLAttributes,
  useContext,
} from "react";
import "./trip-planner.scss";
import { Button } from "../../button/ButtonComponent";
import { Link } from "@kickstartds/base/lib/link";
import { Headline } from "@kickstartds/base/lib/headline";
import { TextField } from "@kickstartds/form/lib/text-field";
import { Radio } from "@kickstartds/form/lib/radio";

export const TripPlannerContextDefault = forwardRef<
  HTMLImageElement,
  ImgHTMLAttributes<HTMLImageElement>
>(({}) => {
  return (
    <>
      <div className="trip-planner">
        <Headline level="h3" text="Fahrplanauskunft" style="h3" />
        <div className="page-teaser__row">
          <TextField label="Von" placeholder="Starthaltestelle" />
        </div>
        <div className="page-teaser__row">
          <TextField label="Nach" placeholder="Zielhaltestelle" />
        </div>
        <div className="page-teaser__row">
          <TextField label="Datum" placeholder="" />
          <TextField label="Zeit" placeholder="" />
        </div>

        <div className="page-teaser__row">
          <div className="page-teaser__col page-teaser__col--customer">
            <Radio value="PK" label="Privatkunde" name="customer" checked />
          </div>
          <div className="page-teaser__col page-teaser__col--customer">
            <Radio value="GK" label="Geschäftskunde" name="customer" />
          </div>
        </div>
        <div className="page-teaser__row">
          <div className="page-teaser__col">
            <Button
              variant="tertiary"
              icon="arrow-right"
              label="Verbindung suchen"
            />
          </div>
        </div>
        <div className="page-teaser__row">
          <div className="page-teaser__col">
            <Link className="trip-planner__link" rel="noopener" target="_blank">
              Abfahrtsmonitor
            </Link>
          </div>
        </div>
      </div>
    </>
  );
});

export const TripPlannerContext = createContext(TripPlannerContextDefault);
export const TripPlanner = forwardRef<
  HTMLImageElement,
  ImgHTMLAttributes<HTMLImageElement>
>((props, ref) => {
  const Component = useContext(TripPlannerContext);
  return <Component {...props} ref={ref} />;
});
TripPlanner.displayName = "TripPlanner";
