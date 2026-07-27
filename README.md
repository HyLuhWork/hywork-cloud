# hywork-cloud

## Getting started

```bash
npm install
npx prisma migrate dev
npm run dev
```

Open `/register` to create the first tenant and admin user, then log in at `/login`.

## Security Center

`Configurações → Segurança` (admin-only) centralizes tenant-wide authentication and
security policy:

- Session inactivity timeout
- Automatic deactivation of users after N days without login
- Single-device / multi-device login policy
- Password complexity rules
- Password reuse history
- Tenant-wide MFA requirement (TOTP)

Settings are stored per tenant in `SecuritySettings` (see `prisma/schema.prisma`) and
enforced in `src/lib/session.ts`, `src/lib/password-policy.ts`, `src/lib/mfa.ts`, and
`src/lib/deactivate-inactive-users.ts`. There is no cron runner in this app; hit
`POST /api/security/deactivate-inactive` (admin session required) from an external
scheduler to run the inactive-user sweep periodically.
