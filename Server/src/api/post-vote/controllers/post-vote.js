'use strict';

/**
 * post-vote controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::post-vote.post-vote');
