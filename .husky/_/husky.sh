#!/usr/bin/env sh

# Function to print debug messages if HUSKY_DEBUG is set to 1
debug() {
  if [ "$HUSKY_DEBUG" = "1" ]; then
    echo "husky (debug) - $1"
  fi
}

# Main function to encapsulate the script logic
main() {
  # Check if husky_skip_init is not set
  if [ -z "$husky_skip_init" ]; then
    readonly hook_name="$(basename -- "$0")"
    debug "starting $hook_name..."

    # Check if HUSKY environment variable is set to 0
    if [ "$HUSKY" = "0" ]; then
      debug "HUSKY env variable is set to 0, skipping hook"
      exit 0
    fi

    # Source ~/.huskyrc if it exists
    if [ -f ~/.huskyrc ]; then
      debug "sourcing ~/.huskyrc"
      . ~/.huskyrc#!/usr/bin/env sh

# Function to print debug messages if HUSKY_DEBUG is set to 1
debug() {
  if [ "$HUSKY_DEBUG" = "1" ]; then
    echo "husky (debug) - $1"
  fi
}

# Function to handle errors and exit
handle_exit() {
  local exit_code=$1
  local hook_name=$2

  if [ $exit_code -ne 0 ]; then
    echo "husky - $hook_name hook exited with code $exit_code (error)"
  fi

  if [ $exit_code -eq 127 ]; then
    echo "husky - command not found in PATH=$PATH"
  fi

  exit $exit_code
}

# Function to source the ~/.huskyrc file if it exists
source_huskyrc() {
  if [ -f ~/.huskyrc ]; then
    debug "sourcing ~/.huskyrc"
    . ~/.huskyrc
  fi
}

# Main function to encapsulate the script logic
main() {
  # Check if husky_skip_init is not set
  if [ -z "$husky_skip_init" ]; then
    readonly hook_name="$(basename -- "$0")"
    debug "starting $hook_name..."

    # Check if HUSKY environment variable is set to 0
    if [ "$HUSKY" = "0" ]; then
      debug "HUSKY env variable is set to 0, skipping hook"
      exit 0
    fi

    # Source ~/.huskyrc if it exists
    source_huskyrc

    # Set husky_skip_init to 1 and export it
    readonly husky_skip_init=1
    export husky_skip_init

    # Execute the hook script
    sh -e "$0" "$@"
    local exit_code=$?

    # Handle exit codes
    handle_exit $exit_code $hook_name
  fi
}

# Run the main function
main "$@"
    fi

    # Set husky_skip_init to 1 and export it
    readonly husky_skip_init=1
    export husky_skip_init

    # Execute the hook script
    sh -e "$0" "$@"
    exitCode="$?"

    # Handle non-zero exit codes
    if [ $exitCode -ne 0 ]; then
      echo "husky - $hook_name hook exited with code $exitCode (error)"
    fi

    # Handle command not found error
    if [ $exitCode -eq 127 ]; then
      echo "husky - command not found in PATH=$PATH"
    fi

    exit $exitCode
  fi
}

# Run the main function
main "$@"