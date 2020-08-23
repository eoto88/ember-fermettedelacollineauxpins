import Application from 'ember-fermettedelacollineauxpins/app';
import config from 'ember-fermettedelacollineauxpins/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
