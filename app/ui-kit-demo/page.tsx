import classList from "@/utils/classList";
import css from "./page.module.css";
import Input from "@/components/Input/Input";
import Button from "@/components/Button/Button";
import Radio from "@/components/Radio/Radio";
import Icon from "@/components/Icon/Icon";

interface DemoSectionProps {
  title?: string;
  children?: React.ReactNode;
}

function DemoSection({ title, children }: DemoSectionProps): React.ReactNode {
  return (
    <section className={classList(css["demo-section"])}>
      {title && <p className={classList(css["demo-section__title"])}>{title}</p>}
      <div className={classList(css["demo-section__list"])}>{children}</div>
    </section>
  );
}

export default function Markup(): React.ReactNode {
  return (
    <main>
      <div className={classList("container", css["demo"])}>
        <DemoSection title="Icons">
          <Icon name="logo" />
          <Icon name="transmission" />
          <Icon name="star" />
          <Icon name="star" color="rating" />
          <Icon name="map" />
          <Icon name="fuel" />
          <Icon name="error" />
          <Icon name="car" />
        </DemoSection>

        <DemoSection title="Inputs">
          <Input />
        </DemoSection>

        <DemoSection title="Buttons">
          <Button />
        </DemoSection>

        <DemoSection title="Radio Buttons">
          <Radio />
        </DemoSection>
      </div>
    </main>
  );
}
