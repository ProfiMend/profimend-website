```markdown
# ProfiMend State Documentation

## Optimal Safe Update System for ProfiMend Memory Governance

In our effort to ensure safe and reliable memory governance for ProfiMend, we have adopted the following protocol:

1. **GitHub SHA Check**  
   All memory updates must include the file’s current SHA. If the file has changed since the last read, GitHub will reject the write, preventing any accidental overwrites.

2. **Merge Logic**  
   Updates must merge new content into the existing file. Only the specified section (identified by markers such as ## [Section]) may be modified. All other content remains untouched.

3. **Backup System**  
   Before any update, the current document version must be backed up with a timestamped filename in `/backups/`. This ensures instant rollback if needed.

4. **Conflict Handling**  
   If a SHA mismatch occurs, the system must re-read the latest file, reapply the intended merge, and seek Owner confirmation before retrying.

5. **Change Log**  
   Each update must append an entry under [Change Log] with timestamp, change type (Add/Edit/Delete), and actor (Owner/PM).

6. **Controlled Mediated Update Model**  
   The controlled mediated update model remains active: all changes require a prior read, Owner confirmation, and logged execution.

7. **Applicability**  
   This system applies to all canonical documents under `/docs` and replaces prior update mechanisms.

## Change Log
- [Timestamp] - Add/Edit/Delete by Owner/PM

---

By adopting this Optimal Safe Update System, we aim to permanently eliminate the risk of overwrites while maintaining a safe, traceable, and reversible document update process.
```

## Decisions


- PM will hold daily standups at 10am MT for 15 minutes to gather progress updates.
- Final architecture validated: Netlify project 'profimend' deploys from profimend-website. Netlify project 'ephemeral-daffodil-808cfb' deploys from profimend-pm-service and acts as PM service.
## Backlog


- Test: memory-search + memory-edit flow (UPDATED).
- Create and define orchestrator role.
- Enable auto-merge only when checks pass. Restrict to: non-prod branches, low-risk changes, or after PM approval.
- Create 'Trusted by small businesses' section under the hero on homepage.
- Enforce approval token rule for WebDev apply step to standardize and clarify approval tokens.
## Notes


## Completed Items


- Created PR #5: added HTML comment at the top of app/routes/_index.tsx.
- Created PR #11 — added 'Test' link to top navigation menu.