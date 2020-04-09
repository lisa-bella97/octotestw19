import DefaultPage from './default';

class SearchPage extends DefaultPage {
	constructor() {
		super('search', '[data-test-id=search-app-ready]')
	}

	get locators() {
		return {
			genres: '#js-genre-input',
			name: '#js-search-input',
			submitButton: '#js-search-params',
			searchResult: '.search-results__film',
		}
	}

	fillGenresForm (genre) {
		this.page.waitForVisible(this.locators.genres);
		this.page.click(this.locators.genres);
		this.page.setValue(this.locators.genres, genre);
	}

	fillName(name) {
		this.page.waitForVisible(this.locators.name);
		this.page.click(this.locators.name);
		this.page.setValue(this.locators.name, name);
	}

	submit() {
		this.page.waitForVisible(this.locators.submitButton);
		this.page.click(this.locators.submitButton)
	}
	
	waitSearchResultItem() {
		this.page.waitForVisible(this.locators.searchResult);
	}
}

export default new SearchPage();