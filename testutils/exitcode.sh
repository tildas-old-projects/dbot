#!/bin/bash
if [ $? == 0 ]
then
  echo "✓ Test successful"
else
  echo "❌ The test failed. Either check the issues or file a issue."
  exit 1
fi

