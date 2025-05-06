#!/usr/bin/env python3

import os
import sys
import subprocess

def main():
    # Make sure git-filter-repo is in the path
    script_path = os.path.join(os.getcwd(), 'git-filter-repo', 'git-filter-repo')
    
    # Check if the user has Python installed and the script exists
    if not os.path.exists(script_path):
        print(f"Error: Could not find git-filter-repo at {script_path}")
        print("Please make sure you've cloned the git-filter-repo repository.")
        return 1
    
    # Create a mailmap file to replace the contributor
    with open('.mailmap', 'w') as f:
        f.write("syedsubhan12 <syedsubhans132@gmail.com> gpt-engineer-app[bot] <159125892+gpt-engineer-app[bot]@users.noreply.github.com>\n")
    
    # Run git-filter-repo to apply the mailmap
    command = [
        sys.executable, 
        script_path,
        '--mailmap', '.mailmap',
        '--force'
    ]
    
    try:
        subprocess.run(command, check=True)
        print("Successfully replaced contributor information!")
        print("The lovable/gpt-engineer-app contributor has been completely removed from git history.")
        print("\nYou may need to force push these changes:")
        print("  git push --force")
    except subprocess.CalledProcessError as e:
        print(f"Error running git-filter-repo: {e}")
        return 1
    
    # Clean up
    if os.path.exists('.mailmap'):
        os.remove('.mailmap')
    
    return 0

if __name__ == "__main__":
    sys.exit(main()) 