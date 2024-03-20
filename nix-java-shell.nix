# For nixos users, you can use this shell for consistency

with (import <nixpkgs> {});
mkShell {
    buildInputs = [ 
        jdk
    ];
}
