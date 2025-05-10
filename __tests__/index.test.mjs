import { beforeEach, describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

import stylelint from 'stylelint';

import config from '../index.js';

const validScss = readFileSync('./__tests__/valid.scss', 'utf-8');
const invalidScss = readFileSync('./__tests__/invalid.scss', 'utf-8');

describe('flags no warnings with valid scss', () => {
	let result;

	beforeEach(async () => {
		result = await stylelint.lint({
			code: validScss,
			config,
		});
	});

	it('did not error', () => {
		assert.equal(result.errored, false);
	});

	it('flags no warnings', () => {
		assert.equal(result.results[0].warnings.length, 0);
	});
});

describe('flags warnings with invalid scss', () => {
	let result;

	beforeEach(async () => {
		result = await stylelint.lint({
			code: invalidScss,
			config,
		});
	});

	it('did error', () => {
		assert.equal(result.errored, true);
	});

	it('flags two warnings', () => {
		assert.equal(result.results[0].warnings.length, 2);
	});

	it('correct warning texts', () => {
		assert.equal(
			result.results[0].warnings[0].text,
			'Expected @if not statement rather than @if statement == null (scss/at-if-no-null)',
		);
		assert.equal(
			result.results[0].warnings[1].text,
			'Expected the color.channel function to be used (scss/function-color-channel)',
		);
	});

	it('correct rules flagged', () => {
		assert.equal(result.results[0].warnings[0].rule, 'scss/at-if-no-null');
		assert.equal(result.results[0].warnings[1].rule, 'scss/function-color-channel');
	});

	it('correct severity flagged', () => {
		assert.equal(result.results[0].warnings[0].severity, 'error');
		assert.equal(result.results[0].warnings[1].severity, 'error');
	});

	it('correct line numbers', () => {
		assert.equal(result.results[0].warnings[0].line, 1);
		assert.equal(result.results[0].warnings[1].line, 4);
	});

	it('correct column numbers', () => {
		assert.equal(result.results[0].warnings[0].column, 5);
		assert.equal(result.results[0].warnings[1].column, 14);
	});
});
