#!/usr/bin/env bash
set -e

until $(curl --output /dev/null --silent --fail http://localhost:3100); do
    printf 'Waiting for OC'
    sleep 10
done

until $(curl --output /dev/null --silent --fail http://localhost:3000/test-css?icons=1); do
    printf 'Waiting for Test Site'
    sleep 10
done

until $(curl --output /dev/null --silent --fail http://localhost:3000/test-svg?icons=1); do
    printf 'Waiting for Test Site'
    sleep 10
done


TMP_TOTAL_RESULTS=$(mktemp)
for component in svg css; do
  for repeat in `seq 0 1 50`; do
    for icons in 10 50 100 300 ; do
      export icons=${icons};
      export component=${component};
      $(npm bin)/lighthouse --quiet --chrome-flags="--headless" --output=json --perf "http://localhost:3000/test-${component}?icons=${icons}" | jq '{test: env.component, icons:env.icons, score:.score, firstInteractive:.audits["first-interactive"]["rawValue"], size:.audits["total-byte-weight"]["rawValue"]}' >> ${TMP_TOTAL_RESULTS}
    done
  done
  cat ${TMP_TOTAL_RESULTS} | jq --slurp '.' | $(npm bin)/json2csv > results.csv
done