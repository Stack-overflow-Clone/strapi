'use strict';

/**
 * answer-vote service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::answer-vote.answer-vote');
