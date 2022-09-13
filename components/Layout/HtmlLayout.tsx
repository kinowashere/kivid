import { Fragment, FunctionComponent } from "preact";
import { Head } from "$fresh/runtime.ts";

export interface HtmlLayoutProps {
  title?: string;
}

const HtmlLayout: FunctionComponent<HtmlLayoutProps> = (props) => {
  const { children, title } = props;
  return (
    <Fragment>
      <Head>
        <link
          rel="shortcut icon"
          href="/favicon.png"
          type="image/x-icon"
        />
        <title>
          {title ? `${title} | kivid` : "kivid: region list maker"}
        </title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Dosis:wght@200;300;400;500;600;700;800&family=Righteous&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        {children}
      </body>
    </Fragment>
  );
};

export default HtmlLayout;
