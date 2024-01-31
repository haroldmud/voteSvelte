import { test, expect } from '@playwright/test';


test.describe('Making sure the links attributes have the right values', ()=>{
  test('working with main routes', async({ page })=>{
    await page.goto("/");
    const vote = page.getByRole('link', {name:'Vote'});
    const tasks = page.getByRole('link', {name:'Tasks'});
    const posts = page.getByRole('link', {name:'Posts'});

    await expect(vote).toHaveAttribute('href', '/');
    await expect(tasks).toHaveAttribute('href', '/todo');
    await expect(posts).toHaveAttribute('href', '/placeholder');
    await vote.click();
    await tasks.click();
    await posts.click();
  })

  test('working with nested routes', async({ page })=>{
    await page.goto("/");
    const current = page.getByRole('link', {name:'Current'});
    const choice = page.getByRole('link', {name:'Add choice'});

    await expect(current).toHaveAttribute('href', '/');
    await expect(choice).toHaveAttribute('href', '/new');
    await current.click();
    await choice.click();
  })  
})
