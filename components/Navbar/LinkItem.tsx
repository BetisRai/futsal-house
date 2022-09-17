import NextLink from "next/link";

interface LinkItemProps {
  href: string;
  path: string;
  target?: string;
  children?: JSX.Element | string;
}

const LinkItem = (props: LinkItemProps): JSX.Element => {
  const active = props.href === props.path;
  const theme = `px-4 text-lg font-medium text-white border-b-2 hover:scale-105 transition-all ${
    active ? "border-b-red" : "border-b-transparent hover:border-b-white"
  }`;

  return (
    <NextLink href={props.href} target={props.target}>
      <li className={theme}>{props.children}</li>
    </NextLink>
  );
};

export default LinkItem;
