import React from 'react';

import { Container, Icon, List } from 'semantic-ui-react';

const SiteFooter = () => (
  <Container className="footer">
    <List horizontal>
      <List.Item disabled>
        &copy; {new Date().getFullYear()} Stock Market Price Updater
      </List.Item>
      <List.Item href="https://github.com/daniel-beckham/stock-market-price-updater">
        <Icon name="github" />
      </List.Item>
    </List>
  </Container>
);

export default SiteFooter;
