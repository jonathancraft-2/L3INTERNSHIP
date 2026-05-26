<template>
  <div class="nav">
    
    <router-link to="/" class="nav-link">
      Home
    </router-link>

    <router-link to="/about" class="nav-link">
      More abt us
    </router-link>

    <router-link to="/Contacts" class="nav-link">
      Reachout
    </router-link>
    <router-link to="/staff" class="nav-link" >Our staff</router-link>

  </div>
</template>

<style scoped>
.nav {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;

  background: white;
  padding: 20px 40px;

  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
}

.nav-link {
  text-decoration: none;
  color: #334155;

  font-size: 17px;
  font-weight: 600;

  transition: 0.3s ease;
  position: relative;
}

.nav-link:hover {
  color: #2563eb;
}

.nav-link::after {
  content: "";

  position: absolute;
  left: 0;
  bottom: -6px;

  width: 0%;
  height: 2px;

  background: #2563eb;

  transition: 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}
</style>