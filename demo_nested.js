<body ng-app="MyApp">
  <div ng-controller="MyCtrl">
    <label>Primitive</label>
    <input type="text" ng-model="name">

    <label>Object</label>
    <input type="text" ng-model=å"user.name">

    <div class="nested" ng-controller="MyNestedCtrl">
      <label>Primitive</label>
      <input type="text" ng-model="name">

      <label>Primitive with explicit $parent reference</label>
      <input type="text" ng-model="$parent.name">

      <label>Object</label>
      <input type="text" ng-model="user.name">
    </div>
  </div>
</body>
