type PropsWithChildren = {
  children: React.ReactNode;
};
type ReactFCWithChildren = React.FC<PropsWithChildren>;
type ReactFCWithProps<T = {}> = React.FC<PropsWithChildren & T>;

interface IRouterProps {
  isAuth: boolean;
}
