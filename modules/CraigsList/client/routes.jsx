import CLApp from './CLApp';
import CLMain from './CLMain';

FlowRouter.route('/craigslist', {
  action() {
    ReactLayout.render(CLApp, {
      children: <CLMain />
    });
  }
});
