export default class Controller {
    constructor(model, view) {
      this.model = model;
      this.view = view;
      this.view.render(this.model.data);
  
      // Example event handling for adding an item
      const addButton = document.getElementById('addButton');
      addButton.addEventListener('click', () => {
        const newItem = document.getElementById('newItem').value;
        if (newItem) {
          this.model.addItem(newItem);
          this.view.render(this.model.data);
        }
      });
  
      // Example event handling for removing an item
      this.view.app.addEventListener('click', (event) => {
        if (event.target.tagName === 'DIV') {
          const index = Array.from(this.view.app.children).indexOf(event.target);
          if (index >= 0) {
            this.model.removeItem(index);
            this.view.render(this.model.data);
          }
        }
      });
    }
  }
  