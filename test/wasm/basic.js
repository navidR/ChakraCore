//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var a = WScript.LoadWasmFile('basic.wast', {foo: function(a){print(a); return 2;}});
print(a(11));