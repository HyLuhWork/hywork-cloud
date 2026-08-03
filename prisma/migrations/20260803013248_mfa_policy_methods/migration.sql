-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_SecuritySettings" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "tenantId" TEXT NOT NULL,
    "sessionTimeoutEnabled" BOOLEAN NOT NULL DEFAULT true,
    "sessionTimeoutValue" INTEGER NOT NULL DEFAULT 30,
    "sessionTimeoutUnit" TEXT NOT NULL DEFAULT 'MINUTES',
    "inactiveUserDeactivationEnabled" BOOLEAN NOT NULL DEFAULT false,
    "inactiveUserDeactivationDays" INTEGER NOT NULL DEFAULT 90,
    "devicePolicy" TEXT NOT NULL DEFAULT 'MULTIPLE',
    "passwordMinLength" INTEGER NOT NULL DEFAULT 8,
    "passwordMaxLength" INTEGER,
    "passwordRequireUppercase" BOOLEAN NOT NULL DEFAULT true,
    "passwordRequireLowercase" BOOLEAN NOT NULL DEFAULT true,
    "passwordRequireNumber" BOOLEAN NOT NULL DEFAULT true,
    "passwordRequireSpecialChar" BOOLEAN NOT NULL DEFAULT false,
    "passwordHistoryEnabled" BOOLEAN NOT NULL DEFAULT true,
    "passwordHistoryCount" INTEGER NOT NULL DEFAULT 3,
    "mfaEnabled" BOOLEAN NOT NULL DEFAULT false,
    "mfaPolicy" TEXT NOT NULL DEFAULT 'OPTIONAL',
    "mfaRequiredRoles" TEXT NOT NULL DEFAULT '',
    "mfaMethodAuthenticatorApp" BOOLEAN NOT NULL DEFAULT true,
    "mfaMethodSms" BOOLEAN NOT NULL DEFAULT false,
    "mfaMethodEmail" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "SecuritySettings_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_SecuritySettings" ("createdAt", "devicePolicy", "id", "inactiveUserDeactivationDays", "inactiveUserDeactivationEnabled", "mfaPolicy", "passwordHistoryCount", "passwordHistoryEnabled", "passwordMaxLength", "passwordMinLength", "passwordRequireLowercase", "passwordRequireNumber", "passwordRequireSpecialChar", "passwordRequireUppercase", "sessionTimeoutEnabled", "sessionTimeoutUnit", "sessionTimeoutValue", "tenantId", "updatedAt") SELECT "createdAt", "devicePolicy", "id", "inactiveUserDeactivationDays", "inactiveUserDeactivationEnabled", "mfaPolicy", "passwordHistoryCount", "passwordHistoryEnabled", "passwordMaxLength", "passwordMinLength", "passwordRequireLowercase", "passwordRequireNumber", "passwordRequireSpecialChar", "passwordRequireUppercase", "sessionTimeoutEnabled", "sessionTimeoutUnit", "sessionTimeoutValue", "tenantId", "updatedAt" FROM "SecuritySettings";
DROP TABLE "SecuritySettings";
ALTER TABLE "new_SecuritySettings" RENAME TO "SecuritySettings";
CREATE UNIQUE INDEX "SecuritySettings_tenantId_key" ON "SecuritySettings"("tenantId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
