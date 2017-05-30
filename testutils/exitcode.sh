#!/bin/bash
if [ $? == 0 ]
then
  echo "✓ Test successful! Yay!"
else
  echo "❌ The test failed."
  echo "❌ Please look at the error."
  echo "❌ File a issue if it is with code."
  exit 1
fi

