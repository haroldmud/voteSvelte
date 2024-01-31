import { test, expect } from "@playwright/test"

test.beforeEach(async({ page }) => {
  await page.goto('/placeholder');
})

const posts = [
  {
    id: 1,
    title: 'delectus aut autem',
  },
  {
    id: 2,
    title: 'quis ut nam facilis et officia qui',
  },
  {
    id: 3,
    title: 'fugiat veniam minus'
  }
];

test.describe('work with the placeholder page', () => {

  test('placeholder title',async ({page}) => {
    const locator = page.getByRole('heading', {name: 'PLACEHOLDER'});
  
    await expect(locator).toHaveText(/PLACEHOLDER/)
  })

  test('should go to a dynamic page when item is clicked on', async({ page }) => {
    const postItem1 = page.getByRole('link', { name: posts[0].title });
    const postItem2 = page.getByRole('link', { name: posts[1].title });
    await expect(postItem1).toHaveAttribute('href', `/placeholder/${posts[0].id}`);
    await expect(postItem2).toHaveAttribute('href', `/placeholder/${posts[1].id}`)
  })

  test('should display "loading..." before the data loads', async({ page })=> {
    const loadingLocator = page.getByText("loading...")

    await expect(loadingLocator).toBeVisible();
  })

  test('should display a message if the user has no network', async({ page })=> {
    const networkLocator = page.getByText("Oops! No internet")

    await expect(networkLocator).toBeHidden();
  })
  
  test('data should have the expected content', async({ page })=> {
    const contentLocator = page.getByTestId("post-link")

    await expect(contentLocator.nth(0)).toHaveText('delectus aut autem')
  })
} )
