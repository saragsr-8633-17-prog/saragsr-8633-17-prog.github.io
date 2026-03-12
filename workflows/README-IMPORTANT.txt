IMPORTANT: GitHub Actions Workflow Setup
=========================================

GitHub Actions only reads workflows from the .github/workflows/ directory.
Figma Make cannot create directories starting with a dot, so deploy.yml
is stored here at /workflows/deploy.yml as a reference copy.

AFTER YOUR FIRST FIGMA MAKE SYNC, run these commands once:

  mkdir -p .github/workflows
  cp workflows/deploy.yml .github/workflows/deploy.yml
  git add .github/workflows/deploy.yml
  git commit -m "Add workflow to .github/workflows"
  git push

The .github/workflows/deploy.yml file will persist across future syncs
because Figma Make only manages files it knows about and won't delete it.
