import { SplitWeighted } from "../../split-weighted/SplitWeightedComponent";
import { BlogHead } from "../../blog-head/BlogHeadComponent";
import { Section } from "../../section/SectionComponent";
import { BlogAside } from "../../blog-aside/BlogAsideComponent";
import { Text } from "../../text/TextComponent";
import { Cta } from "../../cta/CtaComponent";
import { BlogPostProps } from "../BlogPostProps";
import { FC, PropsWithChildren } from "react";

export type { BlogPostProps };

export const BlogPost: FC<PropsWithChildren<BlogPostProps>> = ({
  head,
  content,
  aside,
  cta,
  children,
}) => (
  <>
    <Section width="wide">
      <SplitWeighted
        sticky
        mainLayout={{
          minWidth: "narrow",
        }}
        main={
          <>
            {head && <BlogHead {...head} />}
            {content ? <Text text={content} /> : children}
          </>
        }
        context={aside && <BlogAside {...aside} />}
      />
    </Section>
    {cta && (
      <>
        <Section backgroundColor="accent" content={{ mode: "list" }}>
          <Cta {...cta} />
        </Section>
      </>
    )}
  </>
);
BlogPost.displayName = "BlogPost";
