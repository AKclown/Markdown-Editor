import arduino from 'highlight.js/lib/languages/arduino';
import bash from 'highlight.js/lib/languages/bash';
import c from 'highlight.js/lib/languages/c';
import cpp from 'highlight.js/lib/languages/cpp';
import csharp from 'highlight.js/lib/languages/csharp';
import css from 'highlight.js/lib/languages/css';
import diff from 'highlight.js/lib/languages/diff';
import go from 'highlight.js/lib/languages/go';
import graphql from 'highlight.js/lib/languages/graphql';
import ini from 'highlight.js/lib/languages/graphql';
import java from 'highlight.js/lib/languages/java';
import javascript from 'highlight.js/lib/languages/javascript';
import json from 'highlight.js/lib/languages/json';
import kotlin from 'highlight.js/lib/languages/kotlin';
import less from 'highlight.js/lib/languages/less';
import lua from 'highlight.js/lib/languages/lua';
import makefile from 'highlight.js/lib/languages/makefile';
import markdown from 'highlight.js/lib/languages/markdown';
import objectivec from 'highlight.js/lib/languages/objectivec';
import perl from 'highlight.js/lib/languages/perl';
import php from 'highlight.js/lib/languages/php';
import phpTemplate from 'highlight.js/lib/languages/php-template';
import plaintext from 'highlight.js/lib/languages/plaintext';
import python from 'highlight.js/lib/languages/python';
import pythonRepl from 'highlight.js/lib/languages/python-repl';
import r from 'highlight.js/lib/languages/r';
import ruby from 'highlight.js/lib/languages/ruby';
import scss from 'highlight.js/lib/languages/scss';
import shell from 'highlight.js/lib/languages/shell';
import sql from 'highlight.js/lib/languages/sql';
import swift from 'highlight.js/lib/languages/swift';
import typescript from 'highlight.js/lib/languages/swift';
import vbnet from 'highlight.js/lib/languages/vbnet';
import wasm from 'highlight.js/lib/languages/wasm';
import xml from 'highlight.js/lib/languages/xml';
import yaml from 'highlight.js/lib/languages/yaml';

const languages = {
  arduino,
  bash,
  c,
  cpp,
  csharp,
  css,
  diff,
  go,
  graphql,
  ini,
  java,
  javascript,
  json,
  kotlin,
  less,
  lua,
  makefile,
  markdown,
  objectivec,
  perl,
  php,
  plaintext,
  python,
  r,
  ruby,
  scss,
  shell,
  sql,
  swift,
  typescript,
  vbnet,
  wasm,
  xml,
  yaml,
  'php-template': phpTemplate,
  'python-repl': pythonRepl,
};

const aliases = {
  arduino: ['ino'],
  bash: ['sh'],
  c: ['h'],
  cpp: ['cc', 'c++', 'h++', 'hpp', 'hh', 'hxx', 'cxx'],
  csharp: ['cs', 'c#'],
  diff: ['patch'],
  go: ['golang'],
  graphql: ['gql'],
  ini: ['toml'],
  java: ['jsp'],
  javascript: ['js', 'jsx', 'mjs', 'cjs'],
  kotlin: ['kt', 'kts'],
  makefile: ['mk', 'mak', 'make'],
  markdown: ['md', 'mkdown', 'mkd'],
  objectivec: ['mm', 'objc', 'obj-c', 'obj-c++', 'objective-c++'],
  perl: ['pl', 'pm'],
  plaintext: ['text', 'txt'],
  python: ['py', 'gyp', 'ipython'],
  'python-repl': ['pycon'],
  ruby: ['rb', 'gemspec', 'podspec', 'thor', 'irb'],
  shell: ['console', 'shellsession'],
  typescript: ['ts', 'tsx'],
  vbnet: ['vb'],
  xml: [
    'html',
    'xhtml',
    'rss',
    'atom',
    'xjb',
    'xsd',
    'xsl',
    'plist',
    'wsf',
    'svg',
  ],
  yaml: ['yml'],
};

export const highlightOptions = {
  aliases,
  languages,
  ignoreMissing: true,
};
