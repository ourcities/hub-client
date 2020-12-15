import React from 'react';
import { Header, Tab } from "bonde-components"
import { useTranslation } from 'react-i18next';
import SearchList from '../SearchList';
import WidgetButton from '../WidgetButton';
import { Widget, WidgetLoading } from '../FetchWidgets';
import Container, { NavigationArgs } from '../Container';
import Shortcuts from './Shortcuts';

type Props = {
  community: {
    id: number
  }
  storage: any
  widgets: Widget[]
  loading: boolean
}

const Home = ({ community, storage, widgets, loading }: Props): React.ReactElement => {
  const { t } = useTranslation("widget");

  return (
    <Container
      title={t("titles.home")}
      navigation={({ push, is }: NavigationArgs) => (
        <>
          <Tab active={is(/\/widgets\/*/)} onClick={() => push('/')}>
            {t("navigation.home")}
          </Tab>
        </>
      )}
    >
      <section>
        <Header.H5 uppercase>Atalhos</Header.H5>
        <Shortcuts community={community} storage={storage} />
        <SearchList
          header={<Header.H5 uppercase>Ações</Header.H5>}
          data={widgets}
          loading={loading}
          renderLoading={<WidgetLoading />}
        >
          {({ result }: any) => result.map((w: Widget) => (
            <WidgetButton key={w.id} widget={w} />
            ))}
        </SearchList>
      </section>
    </Container>
  );
};

export default Home;