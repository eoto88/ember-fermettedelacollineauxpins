import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class OrderController extends Controller {
    @action
    newOrder() {
        var newPost = this.store.createRecord('order', {
            product: this.get('product'),
            quantity: this.get('quantity'),
            date: new Date()
        });
        newPost.save();
    }
}
