import { Application } from './application';

describe('Application', () => {
  it('should create an instance', () => {
    // Fournir les arguments requis au constructeur
    const app = new Application(
      1, // Id
      'My Application', // Id
      'https://example.com', // application_link
      'icon.png', // application_icon
      ['role1', 'role2'], // application_role_id
      1 // application_status_id
    );
    expect(app).toBeTruthy();
  });
});
