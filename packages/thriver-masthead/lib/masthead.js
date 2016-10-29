// Populate Profile tab under Account Overview
Template.masthead.helpers({
  items: [{
    // Need to find away to get background images in here
    tabs: [{ // If sidebar has tabs: use this property
      title: 'April is Sexual Assault Awareness Month',
      id: 'mastheadSlideA', // These are for aria-controls
      template: 'slideA', // This could really just be an editable content area instead of unique templates
    }, {
      title: 'Join the WCASA team in making a big difference',
      id: 'mastheadSlideB',
      template: 'slideB',
    }, {
      title: 'Training Institute Conference',
      id: 'mastheadSlideC',
      template: 'slideC',
    }],
  }],
});

Template.masthead.onRendered(() => {
  // Auto Rotate function
  const transitionSlider = () => {
    const activeItem = document.querySelector('.masthead menu.tabs > li a[aria-expanded="true"]');
    const menuItems = document.querySelectorAll('.masthead menu.tabs > li');

    // If there is no active item, make the first active
    if (!activeItem) {
      document.querySelector('.masthead menu.tabs > li a')
        .setAttribute('aria-expanded', true);
    }

    // Set the appropriate item as active
    for (let i = 0; i < menuItems.length; i += 1) {
      const item = menuItems[i];

      // Look for which item is currently active
      if (item.children[0].getAttribute('aria-expanded') === 'true') {
        // If this is the last element
        if ((i + 1) === menuItems.length) menuItems[0].children[0].click();
        else menuItems[i + 1].children[0].click();

        break;
      }
    }
  };

  setInterval(transitionSlider, 8000);

  // Start
  transitionSlider();
});
